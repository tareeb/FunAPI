import React from 'react';

function StylingComponent({styles , setStyles}) {
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStyles((prevStyles) => ({
      ...prevStyles,
      [name]: value,
    }));
  };

  return (
    <div  style={{
        textAlign:"center",
        padding:"20px",
        color:"white"
    }}>
      
      <h2>TextBox Styles</h2>
      
      <form style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginTop:"20px",
                color:"white"
            }}>
       
        <label>
          Border :
            <input
                type="text"
                name="border"
                value={styles.border}
                onChange={handleChange}
            />
        </label>

        <label>
          Text Color:
            <input
                type="text"
                name="color"
                value={styles.color}
                onChange={handleChange}
            />
        </label>

        <label>
          Background:
            <input
                type="text"
                name="backgroundColor"
                value={styles.backgroundColor}
                onChange={handleChange}
            />
        </label>

        <label>
          Font Size:
            <input
                type="text"
                name="fontSize"
                value={styles.fontSize}
                onChange={handleChange}
            />
        </label>

      </form>
    </div>
  );
}

export default StylingComponent;
