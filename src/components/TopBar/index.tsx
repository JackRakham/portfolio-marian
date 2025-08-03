'use client'

import Logo from "../Home/Hero/Logo"

const TopBar = () => {
    return (
        <section className="bg-section py-6">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex justify-center">
                    <Logo />
                </div>
            </div>
        </section>
    )
}

export default TopBar