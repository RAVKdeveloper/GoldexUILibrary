import { FC, ImgHTMLAttributes } from 'react'

import dahsboardFull from '../../images/DashboarddashBoard.svg'
import dahsboard from '../../images/DashboarddahcBoardEmpty.svg'
import cardholder from '../../images/CardholdercardHolder.svg'
import projects from '../../images/Projectsprojects.svg'
import invoices from '../../images/Invoicesinvoices.svg'
import transaction from '../../images/Transactiontransaction.svg'
import time from '../../images/Timetime.svg'


interface Props extends ImgHTMLAttributes<HTMLImageElement> {}


export const DashBoardFullIcon: FC<Props> = (props) => {

    return <img src={dahsboardFull} alt='dahsboard full' loading='lazy' {...props} />
}

export const DashBoardIcon: FC<Props> = (props) => {

    return <img src={dahsboard} alt='dahsboard' loading='lazy' {...props} />
}

export const CardHolderIcon: FC<Props> = (props) => {

    return <img src={cardholder} alt='cardholder' loading='lazy' {...props} />
}

export const ProjectsIcon: FC<Props> = (props) => {

    return <img src={projects} alt='projects' loading='lazy' {...props} />
}

export const InvoicesIcon: FC<Props> = (props) => {

    return <img src={invoices} alt='invoices' loading='lazy' {...props} />
}

export const TransactionIcon: FC<Props> = (props) => {

    return <img src={transaction} alt='transaction' loading='lazy' {...props} />
}

export const TimeIcon: FC<Props> = (props) => {

    return <img src={time} alt='time' loading='lazy' {...props} />
}