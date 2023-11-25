interface PageProps {
    children: React.ReactNode;
}

const Page = (props: PageProps) => {
    return (
        <div>
            <h1>Page</h1>
            {props.children}
        </div>
    );
}

export default Page;