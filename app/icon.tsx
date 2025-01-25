import { ImageResponse } from 'next/og'

export default function Icon({ size }: { size: { width: number, height: number } }) {
    const borderWidth = Math.max(2, Math.floor(size.width / 24));
    
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#002868',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: `${borderWidth}px solid #bf0a30`,
                }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{
                        width: '70%',
                        height: '70%',
                    }}
                >
                    <path d="M12 2L9.5 7L12 9.5L14.5 7L12 2zM12 11L9 13.5L12 22L15 13.5L12 11zM6.5 8.5L3 12L7 14L9 11.5L6.5 8.5zM17.5 8.5L15 11.5L17 14L21 12L17.5 8.5z" />
                </svg>
            </div>
        ),
        {
            width: size.width,
            height: size.height
        }
    )
} 