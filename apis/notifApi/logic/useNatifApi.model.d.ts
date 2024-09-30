import { ReactNode } from 'react';
import { NatifApiType } from '../interface/NatifApi.interface';
export declare const useNatifApi: (params?: {
    lifeTime: number;
}) => {
    context: ReactNode;
    NatifApi: NatifApiType;
};
