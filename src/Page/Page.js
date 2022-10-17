export const Page = ({ title = 'Default page title', children }) => {
    return (
        <>
            <header>This is header</header>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </>
    )
}