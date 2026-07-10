-- Add match_number column to matches table
ALTER TABLE matches ADD COLUMN match_number TEXT UNIQUE;

-- Delete old matches
DELETE FROM matches;

-- Insert Saturday matches with numbers
INSERT INTO matches (match_number, match_time, group_name, team_a, team_b, status) VALUES
('SAT-001', '7:50-8:10', 'Kids G1', 'Amogh + Bodhan', 'Tanmay + Nythik', 'scheduled'),
('SAT-002', '8:10-8:30', 'Kids G2', 'Tanush + Joe', 'Kanishk + Advik', 'scheduled'),
('SAT-003', '8:30-8:50', 'Kids G1', 'Anubhav + Sanav', 'Amogh + Nythik', 'scheduled'),
('SAT-004', '8:50-9:10', 'Kids G2', 'Tanush + Joe', 'Yuvaan + Abhiram', 'scheduled'),
('SAT-005', '9:10-9:30', 'Kids G1', 'Anubhav + Avyukt', 'Yakshit + Bodhan', 'scheduled'),
('SAT-006', '9:30-10:10', 'Ceremony', 'Opening Ceremony', 'Flag Hoisting Area + Tea', 'scheduled'),
('SAT-007', '10:10-10:30', 'Men G1', 'Divyam + Sanjeev', 'Srikant + Rohit', 'scheduled'),
('SAT-008', '10:30-10:50', 'Women G1', 'Poornima + Animisha', 'Sayantini + Maya', 'scheduled'),
('SAT-009', '10:50-11:10', 'Men G1', 'Avinish + Rohit', 'Srikant + Sagar', 'scheduled'),
('SAT-010', '11:10-11:30', 'Women G1', 'Jigyasa + Rashmi', 'Sayantini + Animisha', 'scheduled'),
('SAT-011', '11:30-11:50', 'Men G1', 'Avinish + Sagar', 'Prajwal + Abhishek R', 'scheduled'),
('SAT-012', '11:50-12:10', 'Women G1', 'Jigyasa + Maya', 'Sonali + Animisha', 'scheduled'),
('SAT-013', '12:10-12:30', 'Men G1', 'Avinish + Abhishek R', 'Divyam + Rohit', 'scheduled'),
('SAT-014', '12:30-12:50', 'Women G1', 'Poornima + Maya', 'Sayantini + Rashmi', 'scheduled'),
('SAT-015', '12:50-1:10', 'Men G2', 'Manish + Vinay', 'Umang + Goutham', 'scheduled'),
('SAT-016', '1:10-1:30', 'Men G2', 'Rahul + Amit', 'Tilak + Karteek', 'scheduled'),
('SAT-017', '4:30-4:50', 'Women G2', 'Sheetal + Shamita', 'Megha + Pakhi', 'scheduled'),
('SAT-018', '4:50-5:10', 'Seniors', 'Agarwal Ji + Dr. Pande Ji', 'Ram Sagar Ji + Dr. Joshi', 'scheduled'),
('SAT-019', '5:10-5:30', 'Men G2', 'Ashish + Suchit', 'Umang + Amit', 'scheduled'),
('SAT-020', '5:30-5:50', 'Women G2', 'Sheetal + Megha', 'Pakhi + Bahula', 'scheduled'),
('SAT-021', '5:50-6:10', 'Men G2', 'Ashish + Karteek', 'Tilak + Suchit', 'scheduled'),
('SAT-022', '6:10-6:30', 'Seniors', 'Dayanand Ji + Gosh Ji', 'Ram Sagar Ji + Dr. Joshi', 'scheduled'),
('SAT-023', '6:30-6:50', 'Men G2', 'Ashish + Goutham', 'Rahul + Karteek', 'scheduled'),
('SAT-024', '6:50-7:10', 'Men G2', 'Manish + Amit', 'Rahul + Vinay', 'scheduled'),
('SAT-025', '7:10-7:30', 'Women G1', 'Jigyasa + Animisha', 'Sonali + Nikita', 'scheduled'),
('SAT-026', '7:30-7:50', 'Men G2', 'Manish + Suchit', 'Tilak + Goutham', 'scheduled'),
('SAT-027', '7:50-8:10', 'Women G1', 'Jigyasa + Nikita', 'Poornima + Rashmi', 'scheduled'),
('SAT-028', '8:10-8:30', 'Men G2', 'Ashish + Amit', 'Manish + Goutham', 'scheduled');

-- Insert Sunday matches with numbers
INSERT INTO matches (match_number, match_time, group_name, team_a, team_b, status) VALUES
('SUN-001', '8:00-8:20', 'Kids G1', 'Anubhav + Bodhan', 'Yakshit + Avyukt', 'scheduled'),
('SUN-002', '8:20-8:40', 'Kids G2', 'Tanush + Abhiram', 'Kanishk + Joe Arya', 'scheduled'),
('SUN-003', '8:40-9:00', 'Kids G1', 'Amogh + Avyukt', 'Tanmay + Sanav', 'scheduled'),
('SUN-004', '9:00-9:20', 'Men G2', 'Rahul + Suchit', 'Umang + Vinay', 'scheduled'),
('SUN-005', '9:20-9:40', 'Kids G1', 'Amogh + Sanav', 'Yakshit + Nythik', 'scheduled'),
('SUN-006', '9:40-10:00', 'Men G1', 'Avinish + Sanjeev', 'Prajwal + Sagar', 'scheduled'),
('SUN-007', '10:00-10:20', 'Women G1', 'Sayantini + Nikita', 'Sonali + Maya', 'scheduled'),
('SUN-008', '10:20-10:40', 'Men G1', 'Prajwal + Rohit', 'Srikant + Sanjeev', 'scheduled'),
('SUN-009', '10:40-11:00', 'Women G1', 'Poornima + Nikita', 'Sonali + Rashmi', 'scheduled'),
('SUN-010', '11:00-11:20', 'Men G1', 'Divyam + Sagar', 'Srikant + Abhishek R', 'scheduled'),
('SUN-011', '11:20-11:40', 'Women G2', 'Sheetal + Pakhi', 'Shamita + Bahula', 'scheduled'),
('SUN-012', '11:40-12:00', 'Men G1', 'Divyam + Abhishek R', 'Prajwal + Sanjeev', 'scheduled'),
('SUN-013', '12:00-12:20', 'Women G2', 'Sheetal + Bahula', 'Megha + Shamita', 'scheduled'),
('SUN-014', '12:20-12:40', 'Kids G2', 'Kanishk + Abhiram', 'Yuvaan + Advik', 'scheduled'),
('SUN-015', '12:40-1:00', 'Women G2', 'Megha + Bahula', 'Pakhi + Shamita', 'scheduled'),
('SUN-016', '1:00-1:20', 'Kids G1', 'Tanmay + Bodhan', 'Yakshit + Sanav', 'scheduled'),
('SUN-017', '1:20-1:40', 'Men G2', 'Tilak + Vinay', 'Umang + Karteek', 'scheduled'),
('SUN-018', '1:40-2:00', 'Kids G1', 'Anubhav + Nythik', 'Avyukth + Tanmay', 'scheduled'),
('SUN-019', '2:00-2:20', 'Seniors', 'Awadesh Ji + Deepak Ji', 'Dayanand Ji + Gosh Ji', 'scheduled'),
('SUN-020', '2:20-2:40', 'Kids G2', 'Kanishk + Advik', 'Yuvaan + Abhiram', 'scheduled'),
('SUN-021', '2:40-3:00', 'Seniors', 'Awadesh Ji + Deepak Ji', 'Agarwal Ji + Dr. Pande Ji', 'scheduled'),
('SUN-022', '5:00 PM', 'Final', 'Seniors Rank 1 + 4', 'Seniors Rank 2 + 3', 'scheduled'),
('SUN-023', '5:20 PM', 'Final', 'Kids G2 Rank 1 + 4', 'Kids G2 Rank 2 + 3', 'scheduled'),
('SUN-024', '5:40 PM', 'Final', 'Kids G1 Rank 1 + 4', 'Kids G1 Rank 2 + 3', 'scheduled'),
('SUN-025', '6:20 PM', 'Final', 'Men G2 (A)R1 + (I)R2', 'Men G2 (A)R2 + (I)R1', 'scheduled'),
('SUN-026', '6:40 PM', 'Final', 'Women G1 (A)R1 + (I)R2', 'Women G1 (A)R2 + (I)R1', 'scheduled'),
('SUN-027', '7:00 PM', 'Final', 'Men G1 (A)R1 + (I)R2', 'Men G1 (A)R2 + (I)R1', 'scheduled'),
('SUN-028', '7:00-8:00', 'Ceremony', 'Closing Ceremony', 'Badminton Court + Snacks', 'scheduled');
