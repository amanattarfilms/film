
import { useState } from "react";

const projects = [
  "Monsoon Dreams",
  "Lost River",
  "Eternal Sunshine",
  "Summer Nights",
];

const initialShots = [
  { scene: 1, description: "Overcast", camera: "ARRI Alexa", lens: "24mm", notes: "Overhead shot" },
  { scene: 2, description: "Viewà sightup", camera: "ARRI Alexa", lens: "50mm", notes: "Soft light" },
  { scene: 3, description: "Streamlune", camera: "ARRI Alexa", lens: "35mm", notes: "Low-angle tracking" },
  { scene: 4, description: "Close-up", camera: "Sony FX6", lens: "85mm", notes: "Close on emotion" },
  { scene: 5, description: "Steadicam shot", camera: "Sony FX6", lens: "85mm", notes: "Walk and talk" },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState("Monsoon Dreams");
  const [shots, setShots] = useState(initialShots);
  const [newShot, setNewShot] = useState({ scene: '', description: '', camera: '', lens: '', notes: '' });

  const addShot = () => {
    setShots([...shots, { ...newShot, scene: shots.length + 1 }]);
    setNewShot({ scene: '', description: '', camera: '', lens: '', notes: '' });
  };

  return (
    <div className="flex h-screen font-sans bg-gradient-to-br from-[#f9f5ec] to-[#e6efe3]">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#f2e7d5] p-6">
        <h2 className="text-lg font-semibold mb-4">Film Projects</h2>
        <ul>
          {projects.map((project) => (
            <li
              key={project}
              className={\`cursor-pointer mb-2 p-2 rounded \${selectedProject === project ? 'bg-[#d1c7b7] font-bold' : ''}\`}
              onClick={() => setSelectedProject(project)}
            >
              {project}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">{selectedProject}</h1>
        <div className="flex gap-4 mb-6">
          <span className="font-semibold border-b-2 border-black pb-1">Shot List</span>
          <span className="text-gray-500">Schedule</span>
          <span className="text-gray-500">Files</span>
        </div>

        {/* Shot List Table */}
        <table className="w-full border text-sm mb-6">
          <thead>
            <tr className="bg-[#eee4d1] text-left">
              <th className="p-2">Scene No.</th>
              <th className="p-2">Description</th>
              <th className="p-2">Camera</th>
              <th className="p-2">Lens</th>
              <th className="p-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {shots.map((shot, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{shot.scene}</td>
                <td className="p-2">{shot.description}</td>
                <td className="p-2">{shot.camera}</td>
                <td className="p-2">{shot.lens}</td>
                <td className="p-2">{shot.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Shot Form */}
        <div className="bg-white p-4 rounded shadow-md max-w-2xl">
          <h3 className="font-semibold mb-2">Add New Shot</h3>
          <div className="grid grid-cols-5 gap-2">
            <input className="p-2 border rounded" placeholder="Description" value={newShot.description} onChange={e => setNewShot({ ...newShot, description: e.target.value })} />
            <input className="p-2 border rounded" placeholder="Camera" value={newShot.camera} onChange={e => setNewShot({ ...newShot, camera: e.target.value })} />
            <input className="p-2 border rounded" placeholder="Lens" value={newShot.lens} onChange={e => setNewShot({ ...newShot, lens: e.target.value })} />
            <input className="p-2 border rounded" placeholder="Notes" value={newShot.notes} onChange={e => setNewShot({ ...newShot, notes: e.target.value })} />
            <button className="bg-[#d1c7b7] hover:bg-[#c7bba8] text-sm px-4 rounded" onClick={addShot}>+ Add Shot</button>
          </div>
        </div>
      </main>
    </div>
  );
}
