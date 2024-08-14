import { ChevronArrowDownIcon, SearchIcon } from 'goldex-icon-library';
import { FC, useEffect, useRef, useState } from 'react';
import { Dropdown } from '../../../main';
import { OptionType, SelectInputProps } from '../assets/SelectInput.type';
import s from '../assets/style.module.css';

export const SelectInput: FC<SelectInputProps> = ({
  options,
  onClickOption,
  placeholder,
  sizeType = 'sm',
  active,
  emptyText,
  ...rest
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteringOptions, setFilteringOptions] = useState<OptionType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filterOptions = (options: OptionType[]) => {
    const data = options.filter((obj) => {
      return obj.label.includes(searchValue) || obj.value.includes(searchValue);
    });

    setFilteringOptions(data);
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!containerRef || containerRef.current?.contains(target)) return;

      setIsOpen(false);
      setSearchValue('');
    };

    document.addEventListener('click', onClickOutside);

    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  useEffect(() => {
    filterOptions(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, options]);

  return (
    <div className={`${s.root} ${s[sizeType]}`}>
      <article className={`${s.dropdown} ${isOpen && s.open}`}>
        <div className={s.listItems}>
          {filteringOptions.length > 0 ? (
            filteringOptions.map(({ id, label, value }) => (
              <Dropdown
                placeholder={label}
                active={value.toString() === active.toString()}
                isSuccess={value.toString() === active.toString()}
                key={id}
                onClick={() => {
                  onClickOption({ id, label, value });
                  setSearchValue('');
                }}
              />
            ))
          ) : (
            <div className={s.empty}>{emptyText ?? 'Empty :('}</div>
          )}
        </div>
      </article>
      <div
        className={`${s['input-container']} ${s[sizeType]}`}
        ref={containerRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          value={isOpen ? searchValue : active}
          onChange={(e) => {
            if (!isOpen) return;
            setSearchValue(e.target.value);
          }}
          placeholder={placeholder || active.toString()}
          {...rest}
        />
        {isOpen ? (
          <SearchIcon width={16} height={16} />
        ) : (
          <ChevronArrowDownIcon width={16} height={16} />
        )}
      </div>
    </div>
  );
};
