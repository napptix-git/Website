import FlickeringGrid from '../Animations/flickering-grid';
 function FlickeringGridDemo() {
  return (
    <div className="absolute h-full rounded-lg w-full bg-background border">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#00FF00"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={window.innerHeight * 5}
        width={window.innerWidth}
      />
    </div>
  );
};

export default FlickeringGridDemo;