import { FC, ImgHTMLAttributes } from 'react'


import calSearch from '../../images/Calendar SearchcalSearch.svg'
import danger from '../../images/Dangerdanger.svg'
import info from '../../images/Infoinfo.svg'
import user from '../../images/User outlineuser.svg'
import hashtag from '../../images/HashtaghashTag.svg'
import search from '../../images/Searchsearch.svg'
import filter from '../../images/Filterfilter.svg'
import dowloand from '../../images/Downloaddowloand.svg'


interface Props extends ImgHTMLAttributes<HTMLImageElement> {}


export const CalendarSearchIcon: FC<Props> = (props) => {

    return <img src={calSearch} alt='calendar search' loading='lazy' {...props} />
}

export const DangerIcon: FC<Props> = (props) => {

    return <img src={danger} alt='danger' loading='lazy' {...props} />
}

export const InfoIcon: FC<Props> = (props) => {

    return <img src={info} alt='info' loading='lazy' {...props} />
}

export const UserIcon: FC<Props> = (props) => {

    return <img src={user} alt='user' loading='lazy' {...props} />
}

export const HashTagIcon: FC<Props> = (props) => {

    return <img src={hashtag} alt='hashtag' loading='lazy' {...props} />
}

export const SearchIcon: FC<Props> = (props) => {

    return <img src={search} alt='search' loading='lazy' {...props} />
}

export const FilterIcon: FC<Props> = (props) => {

    return <img src={filter} alt='filter' loading='lazy' {...props} />
}

export const DowloandIcon: FC<Props> = (props) => {

    return <img src={dowloand} alt='dowloand' loading='lazy' {...props} />
}