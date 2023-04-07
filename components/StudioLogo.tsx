import Image from 'next/image'
import { HiArrowUturnLeft } from 'react-icons/hi2'

type Props = {}

const StudioLogo = (props: any) => {
    return (
        <div className='flex items-center space-x-2'>
            <Image
                src="/assets/logo.png"
                width={50}
                height={50}
                alt='Logo'
                className='rounded-full object-cover'
            />

            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioLogo