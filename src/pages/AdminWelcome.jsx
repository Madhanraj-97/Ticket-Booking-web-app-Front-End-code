import { useState } from "react";

export function AdminWelcome(){

      const [showPopup, setShowPopup] = useState(false);
    
      const handleSubmit = () => {
        setShowPopup(true);
      };
    
      const handleConfirm = () => {
        setShowPopup(false);
        // Proceed with the submit logic here
      };
    
      const handleCancel = () => {
        setShowPopup(false);
      };
    
      return (
        <div>
          <button onClick={handleSubmit}>Submit</button>
    
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <h3>Are you sure you want to submit?</h3>
                <button onClick={handleConfirm}>OK</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          )}
    
          <style jsx>{`
            .popup {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .popup-content {
              background-color:rgb(168, 196, 47, .85); ;
              padding: 20px;
              border-radius: 10px;
              text-align: center;
              color:  rgb(24, 5, 26);
            }
            button {
              margin: 5px;
            }
          `}</style>
        </div>
      );
    };
