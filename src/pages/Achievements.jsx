const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Best Web Developer Intern",
      year: "2022",
      description: "Recognized for building innovative and user-friendly web applications.",
    },
    {
      id: 2,
      title: "Google Developer Certification",
      year: "2022",
      description: "Completed Google's professional certification in web development.",
    },
     ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">🏆 My Achievements</h2>
      <div className="row">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h4>{achievement.title}</h4>
              <h5 className="text-primary">{achievement.year}</h5>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
