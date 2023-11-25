const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <h1>Page</h1>
            {children}
        </div>
    );
}

export default Page;