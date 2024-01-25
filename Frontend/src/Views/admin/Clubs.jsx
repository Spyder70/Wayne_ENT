const styles = {
  clubsContainerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'center',
    maxWidth: '800px',
    margin: '2% auto',
    fontFamily: "Poppins"
  },

  clubsContainer: {
    position: 'relative',
    width: '200px',
    height: '200px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.8rem',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  },

  clubTitle: {
    margin: 'auto',
    wordWrap: 'break-word',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },

  clubButton: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    background: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
};

const clubs = ['club-name', 'club-name_1', 'club-name_2', 'club-name_3', 'club-name_4', 'club-name_5', 'club-name_6'];

export const Clubs = () => {
  const handleHover = (index) => {
    document.getElementById(index).style.transform = 'scale(1.05)';
  };

  const handleLeave = (index) => {
    document.getElementById(index).style.transform = 'scale(1)';
  };

  return (
    <div style={styles.clubsContainerWrapper}>
      {clubs.map((club, index) => (
        <div
          key={club}
          id={index}
          style={styles.clubsContainer}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleLeave(index)}
        >
          <h3 style={styles.clubTitle}>{club}</h3>
          {/*<button style={styles.clubButton}>Delete</button>*/}
        </div>
      ))}
    </div>
  );
};