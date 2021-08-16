import React from 'react'
import Link from 'next/link'

function index() {
    return (
        <div>
            <div className="container">
                <h1>Welcome Thailand</h1>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>

                <div className="row">
                    <div className="col-md-3">col-md-3</div>
                    <div className="col-md-5">col-md-5</div>
                    <div className="col-md-4">col-md-4</div>
                </div>
            </div>
        </div>
    )
}

export default index
