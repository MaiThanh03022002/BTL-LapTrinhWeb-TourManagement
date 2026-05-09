package btl.nhom1.tourmanagement.tour;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TourRepository extends JpaRepository<Tour, Long>{
	List<Tour> findByNameContaining(String place);
}
