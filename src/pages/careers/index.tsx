import Layout from '@/components/layout/Layout'
import CareersComponent from '@/components/pages/CareersComponent'
import handler from "@/pages/api/data";

const Careers = (props: any) => {
    return (
      <div>
        <Layout>
          <CareersComponent props={props}/>
        </Layout>
      </div>
    )
  }
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
        console.log("data from tuyendung",data.positions)
        const careers = data.positions
    
        if (!data) {
          throw new Error("No data returned from handler");
        }
    
        return {
          props: {
            careers, 
            message: "I'm runningg", 
          },
        };
      } catch (error) {
        console.error("Error in getStaticProps:", error);
        return {
          props: {
            careers: null,
            message: error || "An error occurred",
          },
        };
      }
    };
  export default Careers