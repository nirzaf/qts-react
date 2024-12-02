-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create blogs table
CREATE TABLE public.blogs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    content TEXT NOT NULL,
    pub_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    hero_image TEXT,
    category TEXT,
    tags TEXT[],
    author TEXT,
    author_role TEXT,
    author_image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX blogs_pub_date_idx ON public.blogs (pub_date DESC);
CREATE INDEX blogs_category_idx ON public.blogs (category);
CREATE INDEX blogs_title_idx ON public.blogs USING GIN (to_tsvector('english', title));

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.blogs
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security (RLS)
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Create security policies
CREATE POLICY "Allow public read access"
    ON public.blogs FOR SELECT
    USING (true);

CREATE POLICY "Allow authenticated insert"
    ON public.blogs FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update"
    ON public.blogs FOR UPDATE
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete"
    ON public.blogs FOR DELETE
    USING (auth.role() = 'authenticated');

-- Grant permissions
GRANT SELECT ON public.blogs TO anon;
GRANT SELECT ON public.blogs TO authenticated;
GRANT ALL ON public.blogs TO service_role;
