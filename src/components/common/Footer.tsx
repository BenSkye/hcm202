const Footer = () => {
    return (
        <footer className="bg-primary text-white py-4">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-center space-x-4">
                    <p>&copy; {new Date().getFullYear()} Hành trình cứu nước của Chủ tịch Hồ Chí Minh</p>

                </div>
            </div>
            <div className='flex justify-start mx-2'> <p className='text-sm text-italic'>Dev: Ben</p> </div>
        </footer>
    )
}

export default Footer

