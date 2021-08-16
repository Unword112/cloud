import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function contact() {
    return (
        <div>
            <h1>Contact</h1>
            <li>
                <Link href="/">Home</Link>
            </li>
            <Image
                src="/images/images.png"
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    )
}

export default contact
