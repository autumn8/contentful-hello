export const useContentfulQuery = ({ query, variables }) => {
    const ENVIRONMENT =  'staging';
    const SPACE_ID = 'd3eed91ea9mm';
    const CONTENT_DELIVERY_TOKEN = 'QozhKR-ysYxnDxKi42Qwl_s-M4q5SuXQ6oPeC1VTRr0';
    
    
    const [data, setData] = useState(null);
    useEffect(() => {
      if (!query || !variables) return;
      const getContentfulData = async () => {        
        const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${CONTENT_DELIVERY_TOKEN}`,
            },
            body: JSON.stringify({ query, variables,}),
          }
        );
        const { data: contentfulData } = await response.json();
        setData(contentfulData);
      };
      getContentfulData();
    }, [query, variables]);
    return { data };
  };