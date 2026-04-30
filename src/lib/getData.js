

const getData =async () => {
    
    const res = await fetch(
        "https://b13-a08-tiles-gallery.vercel.app/data.json",
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch tiles");

    return res.json();
};

export default getData;
