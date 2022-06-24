const About = () => {
  return (
    <div className="p-2 bg-base-200">
      <div className="bg-base-100 p-4 rounded-md">
        <div className="font-bold text-xl">개요</div>
        <div>
          <a className="text-blue-400 font-bold" href="https://nomadcoders.co/">
            노마드 코더
          </a>
          의 캐랫마켓 챌린지 4번째 Assignment 를 위해 만들어졌습니다.
        </div>
        <div>
          <a
            className="text-blue-400 font-bold"
            href="https://github.com/Lapto-Vu/nomad-billionaire.git"
          >
            https://github.com/Lapto-Vu/nomad-billionaire.git
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
