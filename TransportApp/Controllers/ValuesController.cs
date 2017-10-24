using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TransportApp.Models;

namespace TransportApp.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public HttpResponseMessage Get(int id)
        {
            UserModel user = new UserModel();
            user.ID = 1;
            if (id == 1)
                user.UserName = "Sanjiv";
            else if (id == 2)
                user.UserName = "Raman";
            else if (id == 3)
                user.UserName = "Punam";
            else if (id == 4)
                user.UserName = "Kusam";
            else
                throw new Exception();

            return Request.CreateResponse(HttpStatusCode.OK, user);
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}