import { useState, memo } from 'react';

const initialData = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  target: 150,
  actual: 120,
  workTime: '6h',
  workers: 8,
  isActive: true,
}));

if (initialData[0]) {
  initialData[0].target = 100;
  initialData[0].actual = 75;
  initialData[0].workTime = '8h';
  initialData[0].workers = 10;
}

const Dashboard = memo(() => {
  const [devices, setDevices] = useState(initialData);

  const toggleDevice = (id: number) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, isActive: !device.isActive } : device
      )
    );
  };

  const getDeviceClasses = (isActive: boolean) =>
    `border p-4 rounded-lg shadow-lg ${isActive ? 'bg-blue-500' : 'bg-yellow-500'}`;

  const getButtonClasses = (isActive: boolean) =>
    `text-white px-2 py-1 rounded ${isActive ? 'bg-gray-500' : 'bg-green-500'}`;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {devices.map((device) => (
        <div key={device.id} className={getDeviceClasses(device.isActive)}>
          <h2 className="text-lg font-bold text-white">Thiết bị {device.id}</h2>
          <button
            onClick={() => toggleDevice(device.id)}
            className={getButtonClasses(device.isActive)}
          >
            {device.isActive ? 'Tắt' : 'Bật'}
          </button>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-1">
              <p className="text-white">Mục tiêu: {device.target}</p>
              <p className="text-white">Thực tế: {device.actual}</p>
            </div>
            <div className="col-span-1">
              <p className="text-white">Thời gian làm việc: {device.workTime}</p>
              <p className="text-white">Số công nhân: {device.workers}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Dashboard;
