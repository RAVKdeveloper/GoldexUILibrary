import { FC, ImgHTMLAttributes } from 'react'

import logoImg from '../../images/Logo marklogo.svg'
import usdtImg from '../../images/USDTusdt.svg'
import rubleImg from '../../images/Rubrub.svg'
import circleImg from '../../images/Visualcircle.svg'
import arrowBottomImg from '../../images/Alt Arrow DownarrowBottom.svg'
import arrowTopImg from '../../images/Alt Arrow UparrowTop.svg'


interface Props extends ImgHTMLAttributes<HTMLImageElement> {}


export const LogoIcon: FC<Props> = (props) => {

    return <img src={logoImg} alt='logo' loading='lazy' {...props} />
}

export const UsdtIcon: FC<Props> = (props) => {

    return <img src={usdtImg} alt='tether' loading='lazy' {...props} />
}

export const RubleIcon: FC<Props> = (props) => {

    return <img src={rubleImg} alt='ruble' loading='lazy' {...props} />
}

export const CircleIcon: FC<Props> = (props) => {

    return <img src={circleImg} alt='circle' loading='lazy' {...props} />
}

export const ArrowBottomIcon: FC<Props> = (props) => {

    return <img src={arrowBottomImg} alt='arrow down' loading='lazy' {...props} />
} 

export const ArrowTopIcon: FC<Props> = (props) => {

    return <img src={arrowTopImg} alt='arrow up' loading='lazy' {...props} />
}