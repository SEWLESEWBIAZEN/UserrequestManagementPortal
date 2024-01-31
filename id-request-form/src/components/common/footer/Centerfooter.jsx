import React from 'react'

const Centerfooter = () => {
    return (
        <div className='mx-4'>
            <form className='form-control d-block' >
                <h5 className='text-success text-center'> Reach us out:</h5>
                <table>
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input placeholder='Enter your Email' className='w-xs-2 w-md-5' type='text'></input></td>
                    </tr>
                    <tr>
                        <td><label>Message:</label></td>
                        <td> <textarea cols={23} rows={3} placeholder='Enter Your message'></textarea></td>
                    </tr>
                    <tr>
                        <button type='submit' className='btn btn-success'>Send Message</button>
                    </tr>
                </table>
            </form>
        </div>
    )
}
export default Centerfooter