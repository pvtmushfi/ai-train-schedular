import { useState } from "react";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [role, setRole] = useState("Admin");

  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="page-container profile-page">

      {/* HEADER */}
      <div className="profile-header">
        <h1>👤 My Profile</h1>
        <p>Manage your account and system access</p>
      </div>

      {/* PROFILE CARD */}
      <div className="profile-container">

        <div className="profile-card">

          {/* AVATAR */}
          <div className="profile-image-section">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
            />

            <button
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "Cancel" : "Edit Profile"}
            </button>

          </div>

          {/* FIELDS */}

          <div className="profile-fields">

            <label>Name</label>

            <input
              type="text"
              value={name}
              disabled={!editMode}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>

            <input
              type="email"
              value={email}
              disabled={!editMode}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Role</label>

            <input
              type="text"
              value={role}
              disabled={!editMode}
              onChange={(e) => setRole(e.target.value)}
            />

          </div>

          {/* SAVE BUTTON */}
          {editMode && (
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          )}

        </div>

      </div>

      {/* STATS SECTION */}
      <div className="profile-stats">

        <div className="modern-card">
          <h2>Trains Managed</h2>
          <h1>128</h1>
        </div>

        <div className="modern-card">
          <h2>AI Queries</h2>
          <h1>342</h1>
        </div>

        <div className="modern-card">
          <h2>Reports Generated</h2>
          <h1>56</h1>
        </div>

      </div>

    </div>
  );
}

export default Profile;