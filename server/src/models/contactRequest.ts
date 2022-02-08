export interface ContactRequest {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  subject: string;
  description: string;
}

export function isContactRequest(object: any): object is ContactRequest {
  return (
    'firstname' in object &&
    typeof object.firstname === 'string' &&
    'lastname' in object &&
    typeof object.lastname === 'string' &&
    'email' in object &&
    typeof object.email === 'string' &&
    object.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ) &&
    'subject' in object &&
    typeof object.subject === 'string' &&
    'description' in object &&
    typeof object.description === 'string'
  );
}
