import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
            <Image
                src="/images/logo/marianlogo.png"
                alt="Marian Daza Logo"
                width={120}
                height={40}
                quality={100}
                className='logo'
            />
        </Link>
    );
};

export default Logo;