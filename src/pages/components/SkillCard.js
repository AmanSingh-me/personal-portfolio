

export default function SkillCard({ iconSrc, skillName, skillLevel }) {
  return (
    <div className="border shadow-md shadow-light-blue border-light-blue rounded-lg m-5 py-5 px-3 w-52 flex flex-col hover:scale-105 transition-transform">
      <div className="border border-light-blue shadow-lg shadow-light-blue p-5 w-20 h-20 rounded-full mx-auto">
        <img src={iconSrc} alt={skillName.toLowerCase()} />
      </div>

      <p className="mt-7 mb-5 text-2xl">{skillName}</p>
      <p className="border border-light-blue shadow-md shadow-light-blue text-light-blue rounded-lg py-1 px-2">
        {skillLevel}
      </p>
    </div>
  );
}
