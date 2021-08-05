import Image from 'next/image'

function Avatar({ url }) {
    return (
        <Image
            className="rounded-full h-10 transition cursor-pointer invisible sm:visible "
            loading="lazy"
            src={url}
            width="25"
            height="25"
            alt="profile pic" />
    )
};

export default Avatar
