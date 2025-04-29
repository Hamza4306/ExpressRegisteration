var MarkerAnnotation = mapkit.MarkerAnnotation,
    clickAnnotation;
var work = new mapkit.Coordinate(49.12283268928136, 8.586423491625453);

mapkit.init({
    authorizationCallback: function(done) {
        // Directly pass the token you have
        const token = "eyJraWQiOiJLNlVVOVBaOEY2IiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI3TkdMS0hQQjdZIiwiaWF0IjoxNzI4MTQzODE1LCJvcmlnaW4iOiIqLmtmenp1bGFzc3VuZ3NleHByZXNzLmRlIn0.ty4lP_zG5Hz-1t45Xhp4IQOzs54OE2DqCeXLWxoEZSXiSeSZzNixszk7DJdTKh1vNRZsPl1z5fMugNJtsh2WNQ";
        done(token);
    }
});
var map = new mapkit.Map("map");
//map.colorScheme = mapkit.Map.ColorSchemes.Dark;

// Setting properties after creation:
var workAnnotation = new MarkerAnnotation(work);
workAnnotation.color = "#003657"; 
workAnnotation.title = "Express Zulassung";
workAnnotation.subtitle = "KFZ-Zulassungs-Express";
workAnnotation.selected = "true";
workAnnotation.glyphText = "🚘";

// Add and show both annotations on the map
map.showItems([workAnnotation]);

const { createApp, ref, onMounted } = Vue

const FORMSPARK_ACTION_URL = "https://submit-form.com/ztdpxsLqU";

createApp({
    setup() {
        const firstname = ref("");
        const lastname = ref("");
        const email = ref("");
        const subject = ref("");
        const message = ref("");

        const submitting = ref(false);
        const success = ref(false);
        const error = ref(false);

        const onSubmit = (e) => {
            e.preventDefault();

            success.value = false;
            error.value = false;
            submitting.value = true;

            fetch(FORMSPARK_ACTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    Vorname: firstname.value,
                    Nachname: lastname.value,
                    EMail: email.value,
                    Thema: subject.value,
                    Nachricht: message.value,
                }),
            }).then(() => {
                submitting.value = false;
                success.value = true;
            }).catch(() => {
                submitting.value = false;
                error.value = true;
            });
        };

        return {
            firstname,
            lastname,
            email,
            subject,
            message,
            onSubmit,
            submitting,
            success,
            error
        };
    },
}).mount('#form')