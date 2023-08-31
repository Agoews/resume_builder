import Link from 'next/link';

const FormPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4 w-1/4">
        <Link href="/form/user-info" className="w-full min-w-[280px] h-12 bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
          Edit User Info
        </Link>
        <Link href="/form/technical-skills" className="w-full min-w-[280px] h-12 bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
          Edit Technical Skills
        </Link>
        <Link href="/form/software-apps" className="w-full min-w-[280px] h-12 bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
          Edit Software Apps
        </Link>
        <Link href="/form/non-software-experience" className="w-full min-w-[280px] h-12 bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
          Edit Non-Software Experience
        </Link>
        <Link href="/form/education" className="w-full min-w-[280px] h-12 bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
          Edit Education
        </Link>
        <Link href="/" className="w-full min-w-[280px] h-12 bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default FormPage;
