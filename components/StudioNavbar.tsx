import Link from 'next/link'
import { HiArrowUturnLeft } from 'react-icons/hi2'

type Props = {}

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div className='flex items-center justify-between p-5'>
                <Link href='/' className='text-protienGolden flex items-center'>
                    <HiArrowUturnLeft className='h-6 w-6 mr-2' />
                    Go To Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar