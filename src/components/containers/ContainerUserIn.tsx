import React from 'react'
import styles from '../../styles/Global' 

interface Props {
    children: React.ReactNode;
}

const ContainerUserIn: React.FC<Props> = ({ children }) => {
    return (
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-20 flex flex-wrap items-center justify-between w-full mx-auto'>
					{children}
				</div>
    )
}

export default ContainerUserIn;