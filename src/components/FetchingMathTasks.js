
function FetchingMathTaks() {
    const [vitiPareDetyrat, setVitiPareDetyrat] = useState([]);

    function mapVitiPareDetyrat() {
        const newVitiPareDetyrat = detyrat.filter((detyra) => {
          return (
            detyra.skripta.titulli === "MATEMATIKA_VITI_1" ||
            detyra.skripta.titulli === "Zbirka Zadaci Matematika Za I Godina"
          );
        });
    
        setVitiPareDetyrat(newVitiPareDetyrat);
      }
    
      useEffect(() => {
        mapVitiPareDetyrat();
      }, [detyrat]);
}

export default FetchingMathTaks;