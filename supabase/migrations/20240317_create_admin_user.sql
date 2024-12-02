-- Create admin user
INSERT INTO auth.users (
    instance_id,
    id,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    role
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'quadrateAdmin',
    crypt('YahmikAllah@123', gen_salt('bf')),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"role":"admin"}',
    now(),
    now(),
    'authenticated'
);
