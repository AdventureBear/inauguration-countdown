import { ImageResponse } from 'next/og'
 
export const generateStaticParams = async () => {
    return [{}]
}
 
export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#002868',
                    width: '1200px',
                    height: '630px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '20px solid #bf0a30',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        style={{
                            width: '200px',
                            height: '200px',
                            marginBottom: '40px'
                        }}
                    >
                        <path d="M12 2L9.5 7L12 9.5L14.5 7L12 2zM12 11L9 13.5L12 22L15 13.5L12 11zM6.5 8.5L3 12L7 14L9 11.5L6.5 8.5zM17.5 8.5L15 11.5L17 14L21 12L17.5 8.5z" />
                    </svg>
                    <div style={{
                        fontSize: 60,
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        Next Presidential Election
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630
        }
    )
} 