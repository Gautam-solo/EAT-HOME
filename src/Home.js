import React from "react";

function Home() {
  const restaurants = [
    {
      id: 1,
      name: "Honest Pav Bhaji",
      cuisine: "Street Food",
      rating: "4.3",
      time: "25-30 min",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
    },
    {
      id: 2,
      name: "Manek Chowk Night Market",
      cuisine: "Street Food",
      rating: "4.6",
      time: "30-35 min",
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
      id: 3,
      name: "Gwalia Sweets",
      cuisine: "Sweets & Snacks",
      rating: "4.2",
      time: "20-25 min",
      image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg"
    },
    {
      id: 4,
      name: "Jassi De Parathe",
      cuisine: "Punjabi",
      rating: "4.5",
      time: "25-30 min",
      image: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
    },
    {
      id: 5,
      name: "Swati Snacks",
      cuisine: "Gujarati Snacks",
      rating: "4.7",
      time: "20-25 min",
      image: "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg"
    },
    {
      id: 6,
      name: "Rajwadu",
      cuisine: "Gujarati & Rajasthani",
      rating: "4.4",
      time: "30-40 min",
      image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg"
    },
    {
      id: 7,
      name: "The Grand Thakar",
      cuisine: "Gujarati Thali",
      rating: "4.6",
      time: "25-30 min",
      image: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg"
    },
    {
      id: 8,
      name: "Shree Balaji Sandwich",
      cuisine: "Sandwiches",
      rating: "4.1",
      time: "15-20 min",
      image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg"
    },
    {
      id: 9,
      name: "Vishalla",
      cuisine: "Gujarati Village Dining",
      rating: "4.5",
      time: "35-40 min",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      id: 10,
      name: "Huber & Holly",
      cuisine: "Ice Cream & Desserts",
      rating: "4.6",
      time: "15-20 min",
      image: "https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg"
    }
  ];

  const hotPicks = [
    { id: 1, name: "Pav Bhaji", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
    { id: 2, name: "Ice Cream", image: "https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg" },
    { id: 3, name: "Gujarati Thali", image: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg" },
    { id: 4, name: "Paratha", image: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg" },
    { id: 5, name: "Sandwich", image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg" }
  ];

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "15px 20px",
          fontSize: "22px",
          fontWeight: "bold",
          position: "sticky",
          top: 0,
          zIndex: 100
        }}
      >
        🍴 Eat Home - Ahmedabad
      </div>

      {/* Search Bar */}
      <div style={{ padding: "15px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search for restaurants, dishes..."
          style={{
            width: "90%",
            padding: "12px",
            borderRadius: "25px",
            border: "1px solid #ddd",
            fontSize: "16px",
            outline: "none"
          }}
        />
      </div>

      {/* Hot Picks Section */}
      <h2 style={{ marginLeft: "20px", marginTop: "10px" }}>🔥 Hot Picks</h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "15px",
          padding: "15px 20px"
        }}
      >
        {hotPicks.map((item) => (
          <div
            key={item.id}
            style={{
              minWidth: "150px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "white"
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
            <p style={{ textAlign: "center", padding: "8px 0", fontWeight: "bold" }}>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Restaurant List */}
      <h2 style={{ marginLeft: "20px" }}>🍽️ Restaurants Near You</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          justifyContent: "center"
        }}
      >
        {restaurants.map((r) => (
          <div
            key={r.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              width: "260px",
              backgroundColor: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}
          >
            <img
              src={r.image}
              alt={r.name}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "12px" }}>
              <h3 style={{ margin: "0 0 6px" }}>{r.name}</h3>
              <p style={{ margin: "0 0 8px", color: "#555" }}>{r.cuisine}</p>
              <p style={{ margin: "0 0 12px", color: "#777", fontSize: "14px" }}>
                ⭐ {r.rating} · {r.time}
              </p>
              <button
                style={{
                  backgroundColor: "#06c167",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "6px",
                  width: "100%",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Checkout Button */}
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#06c167",
          color: "white",
          border: "none",
          padding: "15px 20px",
          borderRadius: "50px",
          fontWeight: "bold",
          fontSize: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          cursor: "pointer"
        }}
      >
        🛒 Checkout
      </button>
    </div>
  );
}

export default Home;