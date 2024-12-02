import Layout from '@/components/layout/Layout'
import TeamComponent from '@/components/pages/TeamComponent'
import handler from '../api/data'

const Team = (props:any) => {
    return (
      <div>
        <Layout>
          <TeamComponent props={props}/>
        </Layout>
      </div>
    )
  }
  export default Team
  export const getStaticProps = async () => {
    try {
      const req = {}; 
      const res = {
        json: (data: any) => Promise.resolve(data), 
        status: (statusCode: any) => ({
          json: (data: any) => Promise.resolve({ statusCode, data }), 
        }),
      };
  
      const data = await handler(req, res);
  
      if (!data) {
        throw new Error("No data returned from handler");
      }
  
      return {
        props: {
          data, 
          message: "I'm runningg", 
        },
      };
    } catch (error) {
      console.error("Error in getStaticProps:", error);
      return {
        props: {
          data: null,
          message: error || "An error occurred",
        },
      };
    }
  };