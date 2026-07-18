// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import { getCourseById } from "../../services/courseApi";

// function CourseViewModal({ courseId, onClose }) {
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const loadCourse = async () => {
//     try {
//       setLoading(true);

//       const res = await getCourseById(courseId);

//       setCourse(res.data.data);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to load course");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (courseId) {
//       loadCourse();
//     }
//   }, [courseId]);

//   if (!courseId) return null;

//   return (
//     <div className="modal fade show d-block modal-bg">
//       <div className="modal-dialog modal-xl">
//         <div className="modal-content">
//           <div className="modal-header">
//             {/* <h4>Course Details</h4> */}

//             <h3>{course?.name || "Course Details"}</h3>

//             <p>Course Information</p>

//             <button className="btn-close" onClick={onClose}></button>
//           </div>

//           <div className="modal-body">
//             {loading ? (
//               <div className="text-center py-5">
//                 <h5>Loading...</h5>
//               </div>
//             ) : (
//               <>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       {/* <strong>Course Name</strong>

//                       <p>{course?.name}</p> */}

//                       <div className="row g-4">
//                         <div className="col-md-4">
//                           <div className="info-card">
//                             <label>Course Name</label>

//                             <h5>{course?.name}</h5>
//                           </div>
//                         </div>

//                         <div className="col-md-4">
//                           <div className="info-card">
//                             <label>Type</label>

//                             <h5>{course?.type}</h5>
//                           </div>
//                         </div>

//                         <div className="col-md-4">
//                           <div className="info-card">
//                             <label>Duration</label>

//                             <h5>{course?.durationMonths} Months</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mb-3">
//                       <strong>Type</strong>

//                       <p>{course?.type}</p>
//                     </div>

//                     <div className="mb-3">
//                       <strong>Status</strong>

//                       <span
//                         className={
//                           course?.status === "ACTIVE"
//                             ? "badge-active"
//                             : "badge-inactive"
//                         }
//                       >
//                         {course?.status}
//                       </span>
//                     </div>

//                     <div className="mb-3">
//                       <strong>Duration</strong>

//                       <p>{course?.durationMonths} Months</p>
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <strong>Actual Price</strong>

//                       <p>
//                         ₹
//                         {new Intl.NumberFormat("en-IN").format(
//                           course?.actualPrice || 0,
//                         )}
//                       </p>
//                     </div>

//                     <div className="mb-3">
//                       <strong>Discount Price</strong>

//                       <p>
//                         ₹
//                         {new Intl.NumberFormat("en-IN").format(
//                           course?.discountedPrice || 0,
//                         )}
//                       </p>
//                     </div>

//                     <div className="mb-3">
//                       <strong>Created</strong>

//                       <p>
//                         {course?.createdAt &&
//                           new Date(course.createdAt).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <hr />

//                 <div className="mb-4">
//                   <h5>Description</h5>

//                   <p>{course?.description}</p>
//                 </div>

//                 <div className="mb-4">
//                   <h5>Syllabus</h5>

//                   <p>{course?.syllabus}</p>
//                 </div>

//                 <hr />

//                 <h5 className="mb-3">Active Batches</h5>

//                 {course?.activeBatches?.length ? (
//                   <div className="table-responsive">
//                     <table className="table table-bordered align-middle">
//                       <thead>
//                         <tr>
//                           <th>Batch Name</th>
//                           <th>Trainer</th>
//                           <th>Capacity</th>
//                           <th>Students</th>
//                           <th>Start</th>
//                           <th>End</th>
//                         </tr>
//                       </thead>

//                       <tbody>
//                         {course.activeBatches.map((batch) => (
//                           <tr key={batch._id}>
//                             <td>{batch.name}</td>

//                             <td>{batch.trainer?.name || "-"}</td>

//                             <td>{batch.capacity}</td>

//                             <td>{batch.enrolledStudents}</td>

//                             <td>
//                               {batch.startDate
//                                 ? new Date(batch.startDate).toLocaleDateString()
//                                 : "-"}
//                             </td>

//                             <td>
//                               {batch.endDate
//                                 ? new Date(batch.endDate).toLocaleDateString()
//                                 : "-"}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ) : (
//                   <div className="alert alert-warning mb-0">
//                     No Active Batch Found
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseViewModal;




import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getCourseById } from "../../services/courseApi";


function CourseViewModal({ courseId, onClose }) {


  const [course, setCourse] = useState(null);

  const [loading, setLoading] = useState(true);



  const loadCourse = async () => {

    try {

      const res = await getCourseById(courseId);

      setCourse(res.data.data);


    } catch (err) {

      toast.error("Failed to load course");

    }

    finally {

      setLoading(false);

    }

  }



  useEffect(() => {

    if (courseId) {

      loadCourse();

    }

  }, [courseId]);



  if (!courseId)
    return null;



  return (

    <div className="modal fade show d-block student-modal-bg">


      <div className="modal-dialog modal-xl modal-dialog-centered">


        <div className="modal-content student-modal">


          {/* HEADER */}


          <div className="student-header">

            <div>

              <h3>
                {course?.name || "Course Details"}
              </h3>


              <p>
                Course Information
              </p>


            </div>


            <button
              className="btn-close"
              onClick={onClose}
            ></button>


          </div>



          <div className="modal-body p-4">


            {

              loading ?


                <div className="text-center py-5">

                  <div className="spinner-border text-success"></div>

                  <p>
                    Loading course details...
                  </p>


                </div>



                :


                <>


                  {/* BASIC INFO */}


                  <div className="row g-4 mb-4">


                    <div className="col-md-4">

                      <div className="info-card">

                        <h6>
                          Course Name
                        </h6>


                        <h5>
                          {course.name}
                        </h5>


                      </div>

                    </div>




                    <div className="col-md-4">

                      <div className="info-card">

                        <h6>
                          Type
                        </h6>


                        <span className="course-type">

                          {course.type}

                        </span>


                      </div>

                    </div>




                    <div className="col-md-4">

                      <div className="info-card">


                        <h6>
                          Status
                        </h6>


                        <span
                          className={
                            course.status === "ACTIVE"
                              ?
                              "badge-success"
                              :
                              "badge-danger"
                          }
                        >

                          {course.status}

                        </span>


                      </div>

                    </div>



                  </div>





                  {/* DETAILS */}



                  <div className="student-detail-box">


                    <div>

                      <label>
                        Duration
                      </label>


                      <p>
                        {course.durationMonths} Months
                      </p>

                    </div>




                    <div>

                      <label>
                        Actual Fee
                      </label>


                      <p>
                        ₹{new Intl.NumberFormat("en-IN")
                          .format(course.actualPrice)}

                      </p>

                    </div>




                    <div>

                      <label>
                        Offer Fee
                      </label>


                      <p>

                        ₹{new Intl.NumberFormat("en-IN")
                          .format(course.discountedPrice)}

                      </p>

                    </div>




                    <div>

                      <label>
                        Created Date
                      </label>


                      <p>

                        {
                          new Date(course.createdAt)
                            .toLocaleDateString()
                        }

                      </p>

                    </div>


                  </div>



                  <hr />





                  <h5 className="section-title">

                    Description

                  </h5>


                  <p>

                    {course.description || "-"}

                  </p>





                  <h5 className="section-title">

                    Syllabus

                  </h5>


                  <p>

                    {course.syllabus || "-"}

                  </p>





                  <hr />


                  <h5 className="section-title">

                    Active Batches

                  </h5>




                  {

                    course.activeBatches?.length ?


                      <div className="table-responsive">


                        <table className="table student-table">


                          <thead>

                            <tr>

                              <th>
                                Batch
                              </th>

                              <th>
                                Trainer
                              </th>

                              <th>
                                Capacity
                              </th>

                              <th>
                                Students
                              </th>

                              <th>
                                Start
                              </th>

                              <th>
                                End
                              </th>


                            </tr>


                          </thead>



                          <tbody>


                            {

                              course.activeBatches.map(batch => (

                                <tr key={batch._id}>


                                  <td>
                                    {batch.name}
                                  </td>


                                  <td>
                                    {batch.trainer?.name || "-"}
                                  </td>


                                  <td>
                                    {batch.capacity}
                                  </td>


                                  <td>
                                    {batch.enrolledStudents}
                                  </td>



                                  <td>

                                    {
                                      batch.startDate
                                        ?
                                        new Date(batch.startDate)
                                          .toLocaleDateString()
                                        :
                                        "-"
                                    }

                                  </td>



                                  <td>

                                    {
                                      batch.endDate
                                        ?
                                        new Date(batch.endDate)
                                          .toLocaleDateString()
                                        :
                                        "-"
                                    }

                                  </td>


                                </tr>


                              ))

                            }


                          </tbody>


                        </table>


                      </div>


                      :


                      <div className="alert alert-warning">

                        No Active Batch Found

                      </div>


                  }





                </>

            }


          </div>


        </div>


      </div>


    </div>


  )

}


export default CourseViewModal;