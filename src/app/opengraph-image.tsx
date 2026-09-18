import { ImageResponse } from "next/og";

export const alt = "Sabih Iriho — Software Developer & Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#0F172A",
                    color: "#F1F5F9",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: 64,
                        height: 6,
                        background: "#0EA5E9",
                        marginBottom: 32,
                    }}
                />
                <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#38BDF8", textTransform: "uppercase" }}>
                    Kigali, Rwanda
                </div>
                <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 20, lineHeight: 1.1 }}>
                    Sabih Iriho
                </div>
                <div style={{ display: "flex", fontSize: 34, marginTop: 16, color: "#94A3B8" }}>
                    Software Developer &amp; Full-Stack Engineer
                </div>
                <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
                    {["React", "Node.js", "MongoDB", "Full-Stack"].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                display: "flex",
                                padding: "10px 22px",
                                background: "#0EA5E9",
                                color: "#0F172A",
                                fontSize: 22,
                                fontWeight: 600,
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
