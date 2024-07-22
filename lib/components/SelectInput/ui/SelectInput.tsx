import { FC, useEffect, useRef, useState } from 'react';
import s from '../assets/style.module.css';
import { ChevronArrowDownIcon, SearchIcon } from 'goldex-icon-library';
import { Dropdown } from '../../../main';
import { OptionType, SelectInputProps } from '../assets/SelectInput.type';

export const SelectInput: FC<SelectInputProps> = ({
  options,
  onClickOption,
  isOpen,
  setIsOpen,
  active,
  sizeType = 'sm',
  ...rest
}) => {
  const [searchValue, setSearchValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filterOptions = (options: OptionType[]) => {
    return options.filter((obj) => {
      return obj.label.includes(searchValue);
    });
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

  return (
    <div className={`${s.root} ${s[sizeType]}`}>
      {isOpen && (
        <article className={`${s.dropdown} ${isOpen && s.open}`}>
          <div className={s.listItems}>
            {filterOptions(options).map(({ id, label, value }) => (
              <Dropdown
                placeholder={label}
                active={label === active}
                key={id}
                onClick={() => {
                  onClickOption(value);
                  setSearchValue('');
                }}
              />
            ))}
          </div>
        </article>
      )}
      <div className={s['input-container']} ref={containerRef}>
        <input
          value={isOpen ? searchValue : active}
          onChange={(e) => {
            if (!isOpen) return;
            setSearchValue(e.target.value);
          }}
          placeholder={active || ''}
          onClick={() => setIsOpen(!isOpen)}
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
