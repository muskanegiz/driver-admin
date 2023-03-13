<script>
    import {onMount} from "svelte";
    // core components
    import registerBg2 from '$lib/images/register_bg_2.png';
    import { browser } from '$app/environment';
    import { redirect } from '@sveltejs/kit';

    onMount(async () => {
      let authToken = browser && localStorage.getItem("token");
      if(authToken){
        console.log("i am here");
        //need to redirect on dashboard
      }
    })
    import { createForm } from 'svelte-forms-lib';
    import * as yup from 'yup';
    const { form, errors, handleChange, handleSubmit } = createForm({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
      }),
  
      onSubmit: async (values) => {
        let url = "https://drive.boosterrocket.app/api/admin/session/login";
          fetch(url,{
            method:  'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:values.email,
                password:values.password,
            })
          })
          .then(response => response.json())
      .then(data => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", data.data);
         if(data.token){
           window.location.href="/dashboard";
        }else{
          console.log("error");
        }
      }).catch(error => {
        console.log(error);
        return [];
    });
      }
    })
</script>
<div>
  <main style="background-color: #1E293B;">
    <section class="relative w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
        style="background-image: url({registerBg2});background-size: contain;">
      </div>     
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-4/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
            >
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h6 class="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                
                <hr class="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div class="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      on:change={handleChange}
                      on:blur={handleChange}
                      bind:value={$form.email}/>
                      {#if $errors.email}
                          <small class="text-center text-red-600 ">{$errors.email}</small>
                      {/if}
                  
                  </div>

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      on:change={handleChange}
                      on:blur={handleChange}
                      bind:value={$form.password}/>
                      {#if $errors.email}
                          <small class="text-center text-red-600 ">{$errors.password}</small>
                      {/if}
                    
                  </div>
                  <div>
                    <label class="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span class="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div class="text-center mt-6">
                    <button
                      class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button" on:click={handleSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div> 
