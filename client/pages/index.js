import React from 'react'
import Link from 'next/link'

function index() {
    return (
        <div>
            <h1>Welcome Thailand</h1>
            <li>
                <Link href="about">About</Link>
            </li>
            <li>
                <Link href="contact">Contact</Link>
            </li>
        </div>
    )
}

export default index
