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