type ContainerProps = {
    styles: React.CSSProperties // Props style được quy định trong React
}

export const Container = (props: ContainerProps) => {
    return <div style={props.styles}>Test content goes here</div>
};

/* Sử dụng
    { const s = { border: '1px solid black', padding: '1rem' } }
    <Container styles={s} />
*/