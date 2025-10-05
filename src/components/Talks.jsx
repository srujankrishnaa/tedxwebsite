import React from 'react'

const Talks = () => {
  const talksData = [
    {
      id: 1,
      title: "Always listen to your Inner Voice",
      speaker: "Hemachandra",
      image: "/talks/hemachandra.png",
      youtubeLink: "https://www.youtube.com/watch?v=S4bQEn3dD_o",
      size: "large"
    },
    {
      id: 2,
      title: "Dancing to my own rhythm and singing to my own beats ",
      speaker: "Simran Choudhary",
      image: "/talks/Simran Choudhary.png",
      youtubeLink: "https://www.youtube.com/watch?v=h2W4CJM9UJ4",
      size: "large"
    },
    {
      id: 3,
      title: "Faith is not always blind.",
      speaker: "Geetha Bhascker ",
      image: "/talks/Geetha Bhascker.png",
      youtubeLink: "https://www.youtube.com/watch?v=ZCbVL4DjwiQ",
      size: "medium"
    },
    {
      id: 4,
      title: "The Capricio",
      speaker: "The Capricio",
      image: "/talks/The Capricio.png",
      youtubeLink: "https://www.youtube.com/watch?v=ksV6_Nmdopo",
      size: "medium"
    },
    {
      id: 5,
      title: "Creating my own path",
      speaker: "Eesha Rebba",
      image: "/talks/Eesha Rebba.png",
      youtubeLink: "https://www.youtube.com/watch?v=JxouQj10DAs",
      size: "medium"
    }
  ];

  const handleTalkClick = (youtubeLink) => {
    if (youtubeLink && youtubeLink !== "#") {
      window.open(youtubeLink, '_blank');
    }
  };

  return (
    <section id="talks" className="talks-section">
      <div className="talks-container">
        {/* Header */}
        <div className="talks-header">
          <h2 className="talks-title">Talks</h2>
          <a href="#all-talks" className="talks-link">
            SEE ALL TALKS →
          </a>
        </div>

        {/* Talks Grid */}
        <div className="talks-grid">
          {/* Top Row - Large Cards */}
          <div className="talks-row talks-row-large">
            {talksData.slice(0, 2).map((talk) => (
              <div
                key={talk.id}
                className="talk-card talk-card-large"
                onClick={() => handleTalkClick(talk.youtubeLink)}
              >
                <img
                  src={talk.image}
                  alt={talk.title}
                  className="talk-card-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="talk-card-placeholder" style={{ display: 'none' }}>
                  <div className="placeholder-text">Image Coming Soon</div>
                </div>
                <div className="talk-card-overlay">
                  <div className="talk-card-content">
                    <h3 className="talk-card-title">{talk.title}</h3>
                    <p className="talk-card-speaker">{talk.speaker}</p>
                  </div>
                  <div className="talk-play-button">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="24" fill="rgba(255, 255, 255, 0.2)" />
                      <path d="M19 14L34 24L19 34V14Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - Medium Cards */}
          <div className="talks-row talks-row-medium">
            {talksData.slice(2, 5).map((talk) => (
              <div
                key={talk.id}
                className="talk-card talk-card-medium"
                onClick={() => handleTalkClick(talk.youtubeLink)}
              >
                <img
                  src={talk.image}
                  alt={talk.title}
                  className="talk-card-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="talk-card-placeholder" style={{ display: 'none' }}>
                  <div className="placeholder-text">Image Coming Soon</div>
                </div>
                <div className="talk-card-overlay">
                  <div className="talk-card-content">
                    <h3 className="talk-card-title">{talk.title}</h3>
                    <p className="talk-card-speaker">{talk.speaker}</p>
                  </div>
                  <div className="talk-play-button">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="rgba(255, 255, 255, 0.2)" />
                      <path d="M16 12L28 20L16 28V12Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Talks
