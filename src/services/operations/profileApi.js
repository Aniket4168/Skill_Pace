import { setProgress } from "../../slices/loadingBarSlice.js";
import { apiConnector } from "../apiconnector";
import { profileEndpoints } from "../apis";
import { toast } from "react-hot-toast";


//getEnrolledCourses
export async function getUserCourses(token,dispatch){
    // const toastId = toast.loading("Loading...");
    dispatch(setProgress);
    let result = []
    try {
      console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
      const response = await apiConnector(
        "GET",
        profileEndpoints.GET_USER_ENROLLED_COURSES_API,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      )
      console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");
    //   console.log(
    //     "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
    //     response
    //   )
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data;
    } catch (error) {
      console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
      toast.error("Could Not Get Enrolled Courses")
    }
    dispatch(setProgress(100));
    // toast.dismiss(toastId)
    return result
}




//get instructor dashboard
export async function getInstructorDashboard(token,dispatch){
  // const toastId = toast.loading("Loading...");
  dispatch(setProgress);
  let result = []
  try {
    console.log("BEFORE Calling BACKEND API FOR INSTRUCTOR DASHBOARD");
    const response = await apiConnector(
      "GET",
      profileEndpoints.GET_ALL_INSTRUCTOR_DASHBOARD_DETAILS_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("AFTER Calling BACKEND API FOR INSTRUCTOR DASHBOARD");
    // console.log(
    //   "GET_INSTRUCTOR_DASHBOARD_API API RESPONSE............",
    //   response
    // )

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data;
  } catch (error) {
    console.log("GET_INSTRUCTOR_DASHBOARD_API API ERROR............", error)
    toast.error("Could Not Get Instructor Dashboard")
  }
  dispatch(setProgress(100));
  // toast.dismiss(toastId)
  return result
}