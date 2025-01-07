import {maintainanceProcess} from '../mobile-app-support/data'

const MaintenanceProcess = () => {
  return (
    <>
      <div className="row mt-5">
        {maintainanceProcess.map((item, index) => (
           <div className="col-md-6 my-3" key={index}>
           <div className="maintain-process mobileCardHeading">
             <h3 className='cardHeading'>{item.heading}</h3>
             <p className='cardDesc'>
                {item.description}
             </p>
           </div>
         </div>
        ))}
       
      </div>
    </>
  );
};

export default MaintenanceProcess;
